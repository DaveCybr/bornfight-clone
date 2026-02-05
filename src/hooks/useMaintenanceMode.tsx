 import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
 import { supabase } from "@/integrations/supabase/client";
 import { Json } from "@/integrations/supabase/types";
 
 // List of paths that should still be accessible during maintenance
 const ALLOWED_PATHS = ["/admin", "/admin/yearbooks"];
 
 interface MaintenanceSettings {
   enabled: boolean;
   message: string;
 }
 
 function isMaintenanceSettings(value: Json): value is { enabled: boolean; message: string } {
   return (
     typeof value === "object" &&
     value !== null &&
     !Array.isArray(value) &&
     "enabled" in value &&
     "message" in value
   );
 }
 
 export function useMaintenanceMode() {
   const queryClient = useQueryClient();
 
   const { data, isLoading } = useQuery({
     queryKey: ["maintenance-mode"],
     queryFn: async () => {
       const { data, error } = await supabase
         .from("site_settings")
         .select("value")
         .eq("key", "maintenance_mode")
         .single();
 
       if (error) {
         console.error("Error fetching maintenance mode:", error);
         return { enabled: false, message: "" };
       }
 
       if (data?.value && isMaintenanceSettings(data.value)) {
         return data.value as MaintenanceSettings;
       }
 
       return { enabled: false, message: "" };
     },
     staleTime: 1000 * 30, // Cache for 30 seconds
   });
 
   const updateMutation = useMutation({
     mutationFn: async (settings: MaintenanceSettings) => {
       const { error } = await supabase
         .from("site_settings")
         .update({ value: settings as unknown as Json })
         .eq("key", "maintenance_mode");
 
       if (error) throw error;
     },
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["maintenance-mode"] });
     },
   });
 
   const isMaintenanceMode = data?.enabled ?? false;
   const maintenanceMessage = data?.message ?? "";
 
   const isPathAllowed = (pathname: string) => {
     return ALLOWED_PATHS.some((path) => pathname.startsWith(path));
   };
 
   const toggleMaintenanceMode = (enabled: boolean, message?: string) => {
     updateMutation.mutate({
       enabled,
       message: message ?? maintenanceMessage,
     });
   };
 
   return {
     isMaintenanceMode,
     maintenanceMessage,
     isLoading,
     isPathAllowed,
     toggleMaintenanceMode,
     isUpdating: updateMutation.isPending,
   };
 }
 
 export default useMaintenanceMode;