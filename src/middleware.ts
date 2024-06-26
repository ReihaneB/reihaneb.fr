import { maintenanceHTML } from './utils/maintenance';

const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === 'true';

// This function can be marked `async` if using `await` inside
export function middleware() {
  if (MAINTENANCE_MODE) {
    return new Response(maintenanceHTML, {
      status: 503,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }
}
