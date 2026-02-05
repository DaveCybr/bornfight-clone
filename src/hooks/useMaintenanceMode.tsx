 // Maintenance Mode Hook
 // Set this to true to enable maintenance mode across the entire site
 // In production, you could fetch this from Supabase or an environment variable
 
 const MAINTENANCE_MODE = false;
 
 // Optional: List of paths that should still be accessible during maintenance
 const ALLOWED_PATHS = ["/admin", "/admin/yearbooks"];
 
 export function useMaintenanceMode() {
   const isMaintenanceMode = MAINTENANCE_MODE;
   
   const isPathAllowed = (pathname: string) => {
     return ALLOWED_PATHS.some(path => pathname.startsWith(path));
   };
 
   return {
     isMaintenanceMode,
     isPathAllowed,
   };
 }
 
 export default useMaintenanceMode;