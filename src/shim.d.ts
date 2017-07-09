import * as __React from 'react';

declare global {
    const React: typeof __React
    
    interface Window {
        DISQUS: any,
        disqus_shortname: string,
        disqus_identifier: string,
        disqus_title: string,
        disqus_url: string,
    }
}
