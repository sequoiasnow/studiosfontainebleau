const SHORTNAME = 'the1codemaster-github-io-studiosfontainebleau';
const WEBSITE_URL = 'http://studiosfontainebleau';

interface DisqusThreadProps {
    id: string,
    title: string,
    path: string,
    shortname: string,
    websiteUrl: string,
}

class DisqusThread extends React.Component<DisqusThreadProps, {}> {

    renderDisqus() {
        if (window.DISQUS === undefined) {
            var script = document.createElement('script');
            script.async = true;
            script.src = 'https://' + this.props.shortname + '.disqus.com/embed.js';
            document.getElementsByTagName('head')[0].appendChild(script);
        } else {
            window.DISQUS.reset({reload: true});
        }
    }

    shouldComponentUpdate(nextProps: DisqusThreadProps) {
        return this.props.id !== nextProps.id ||
               this.props.title !== nextProps.title ||
               this.props.path !== nextProps.path;
    }

    componentDidMount() {
        this.renderDisqus();
    }

    componentDidUpdate() {
        this.renderDisqus(); 
    }

    render() {
        let { id, title, path, shortname, websiteUrl } = this.props;

        window.disqus_shortname  = shortname; 
        window.disqus_identifier = id; 
        window.disqus_title      = title;
        window.disqus_url        = websiteUrl + path; 

        return <div id="disqus_thread" />;
    }
    
}

export default DisqusThread;
