import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

// Extend Window interface for Lucide
declare global {
    interface Window {
        lucide?: any;
    }
}

export default {
    extends: Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({ app, router, siteData }: any) {
        // Initialize Lucide icons on route change
        if (typeof window !== 'undefined') {
            router.onAfterRouteChanged = () => {
                setTimeout(() => {
                    if (window.lucide) {
                        window.lucide.createIcons();
                    }
                }, 100);
            };

            // Initial load
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    }
}
