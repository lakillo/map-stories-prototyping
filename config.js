var config = {
    style: 'map/style.json',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'map stories prototyping',
    logo: '',
    subtitle: 'prototyping space data visualisation walkthroughs for accessbility.',
    byline: 'by Lucy K',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'explaining data types',
            image: './path/to/image/source.png',
            caption: 'Source image caption',
            website: '<a href="" target="_blank">Website</a>',
            author: 'Lucy K',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'Text here.',
            location: {
                center: [35, 1],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'change-over-time-variable',
            alignment: 'right',
            hidden: false,
            title: 'change over time (variable)',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-79, 0],
                zoom: 5,
                pitch: 0,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-79, 0],
                zoom: 5,
                pitch: 0,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        }
    ]
};
