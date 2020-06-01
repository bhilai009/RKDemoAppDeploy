import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/defaultTab/index.html")
@PreventIframe("/defaultTab/config.html")
@PreventIframe("/defaultTab/remove.html")
export class DefaultTab {
}
