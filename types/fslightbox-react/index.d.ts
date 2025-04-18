import * as React from "react";

declare namespace FsLightbox {
    type SourceType = "image" | "video" | "youtube" | null;

    interface VideoDimensions {
        width: number;
        height: number;
    }

    interface ToolbarButtonProps {
        viewBox?: string;
        d?: string;
        width?: string;
        height?: string;
        title?: string;
    }

    interface CustomToolbarButtonProps extends Required<ToolbarButtonProps> {
        onClick: (instance: any) => void;
    }

    interface FsLightboxProps {
        toggler: boolean;
        sources?: Array<string | React.JSX.Element> | undefined;

        // captions
        captions?: Array<string | React.JSX.Element> | undefined; // pro feature

        // custom attributes
        customAttributes?: Array<{ [key: string]: string } | null> | undefined;

        // slide number controlling
        slide?: number | undefined;
        source?: string | undefined;
        sourceIndex?: number | undefined;

        // events
        onOpen?: ((instance: FsLightbox) => void) | undefined;
        onClose?: ((instance: FsLightbox) => void) | undefined;
        onInit?: ((instance: FsLightbox) => void) | undefined;
        onShow?: ((instance: FsLightbox) => void) | undefined;
        onSlideChange?: ((instance: FsLightbox) => void) | undefined; // pro feature

        // types
        disableLocalStorage?: boolean | undefined;
        types?: SourceType[] | undefined;
        type?: SourceType | undefined;

        // sources
        maxYoutubeVideoDimensions?: VideoDimensions | undefined;
        autoplay?: boolean | undefined;

        // thumbs
        thumbs?: Array<string | null> | undefined; // pro feature
        thumbsIcons?: Array<React.JSX.Element | null> | undefined; // pro feature

        // animations
        initialAnimation?: string | undefined; // pro feature
        slideChangeAnimation?: string | undefined; // pro feature

        // toolbar
        customToolbarButtons?: CustomToolbarButtonProps[] | undefined; // pro feature
        // preferences
        disableBackgroundClose?: boolean | undefined;
        disableSlideSwiping?: boolean | undefined;
        loadOnlyCurrentSource?: boolean | undefined;
        showThumbsOnMount?: boolean | undefined; // pro feature
        disableThumbs?: boolean | undefined; // pro feature
        slideDistance?: number | undefined;
        slideshowTime?: number | undefined; // pro feature
        UIFadeOutTime?: number | false | undefined; // pro feature
        zoomIncrement?: number | undefined; // pro feature
        openOnMount?: boolean | undefined;
        exitFullscreenOnClose?: boolean | undefined;

        // svg icons (pro feature)
        svg?: {
            toolbarButtons?: {
                thumbs?: ToolbarButtonProps;
                zoomIn?: ToolbarButtonProps;
                zoomOut?: ToolbarButtonProps;
                slideshow: {
                    start?: ToolbarButtonProps;
                    pause?: ToolbarButtonProps;
                };
                fullscreen: {
                    enter?: ToolbarButtonProps;
                    exit?: ToolbarButtonProps;
                };
                close?: ToolbarButtonProps;
            };
            slideButtons?: {
                previous?: ToolbarButtonProps;
                next?: ToolbarButtonProps;
            };
        };
    }
}

declare class FsLightbox extends React.Component<FsLightbox.FsLightboxProps> {}

export = FsLightbox;
