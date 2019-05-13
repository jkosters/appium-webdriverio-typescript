export type ElementType = WebdriverIOAsync.Element;

export async function getElement(selector: string): Promise<ElementType> {
  const e = await browser.$(selector);
  return e;
}

export async function isElementDisplayed(selector: string, waitForDisplayed: number = 5000): Promise<boolean> {
  const e = await browser.$(selector);
  const displayed = await e.waitForDisplayed(waitForDisplayed);
  return displayed;
}

export async function getElementText(selector: string): Promise<string> {
  const e = await getElement(selector);
  return e.getText();
 }

export function verifyUrl(expectedUrl): () => boolean {
  return () => browser.getUrl() === expectedUrl;
}

export function verifyTitle(expectedTitle): () => boolean {
  return () => browser === expectedTitle;
}
