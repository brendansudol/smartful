import marked from "marked";
import { IDayData } from "../../../lib/types";
import { parseISO } from "../../../utils/dates";

const LOGO_URL = "https://getsmartful.com/img/logo.png";

export function getHtml(dateISO: string, data: IDayData) {
  const date = parseISO(dateISO);
  const dateDisplay = date.toFormat("dd LLLL yyyy");
  const { artist, event, funFacts, idiom, person, quote, word } = data;

  // email template created & exported from https://designmodo.com/postcards/app/
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="x-apple-disable-message-reformatting">
  <title>Smartful :: ${dateDisplay}</title>
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .ReadMsgBody,
    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    div[style*="margin: 16px 0"],
    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0;
      mso-table-rspace: 0;
    }

    table,
    tr,
    td {
      border-collapse: collapse;
    }

    body,
    td,
    th,
    p,
    div,
    li,
    a,
    span {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      mso-line-height-rule: exactly;
    }

    img {
      border: 0;
      outline: none;
      line-height: 100%;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      -webkit-font-smoothing: antialiased;
    }

    .pc-gmail-fix {
      display: none;
      display: none !important;
    }

    @media screen and (min-width: 621px) {
      .pc-email-container {
        width: 620px !important;
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:620px) {
      .pc-sm-p-24-20-30 {
        padding: 24px 20px 30px !important
      }
      .pc-sm-p-30-10-15 {
        padding: 20px 10px 15px !important
      }
      .pc-sm-mw-100pc {
        max-width: 100% !important
      }
      .pc-sm-mw-50pc {
        max-width: 50% !important
      }
      .pc-sm-p-30 {
        padding: 30px !important
      }
      .pc-sm-fs-30 {
        font-size: 30px !important
      }
      .pc-sm-fs-18 {
        font-size: 18px !important
      }
      .pc-sm-p-35-30 {
        padding: 35px 30px !important
      }
      .pc-sm-p-31-20-39 {
        padding: 31px 20px 39px !important
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:525px) {
      .pc-xs-p-15-10-20 {
        padding: 15px 10px 20px !important
      }
      .pc-xs-h-100 {
        height: 100px !important
      }
      .pc-xs-br-disabled br {
        display: none !important
      }
      .pc-xs-fs-30 {
        font-size: 30px !important
      }
      .pc-xs-lh-42 {
        line-height: 42px !important
      }
      .pc-xs-p-20-0-5 {
        padding: 20px 0 5px !important
      }
      .pc-xs-mw-100pc {
        max-width: 100% !important
      }
      .pc-xs-m-0-auto {
        float: none !important;
        margin: 0 auto !important
      }
      .pc-xs-p-25-20 {
        padding: 25px 20px !important
      }
      .pc-xs-fs-16 {
        font-size: 16px !important
      }
      .pc-xs-p-15-10-25 {
        padding: 15px 10px 25px !important
      }
    }
  </style>
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>
<body style="width: 100% !important; margin: 0; padding: 0; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f4f4f4">
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px; color: #151515;">Learn something every day</div>
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0;">
    ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
  </div>
  <table class="pc-email-body" width="100%" bgcolor="#f4f4f4" border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed;">
    <tbody>
      <tr>
        <td class="pc-email-body-inner" align="center" valign="top">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4"/>
            </v:background>
            <![endif]-->
          <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
          <table class="pc-email-container" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto; max-width: 620px;">
            <tbody>
              <tr>
                <td align="left" valign="top" style="padding: 0 10px;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- BEGIN MODULE: HEADER -->
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-30 pc-xs-p-25-20" style="padding: 30px; background: #ffffff; border-radius: 10px;" bgcolor="#ffffff" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <a href="https://getsmartful.com" style="text-decoration: none;">
                                    <img src="${LOGO_URL}" width="40" height="40" alt="" style="max-width: 100%; height: auto; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 16px; color: #ffffff;">
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td height="20" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                              <tr>
                                <td style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 28px; font-weight: 700; line-height: 42px; color: #000000" valign="top">
                                  Smartful
                                </td>
                              </tr>
                              <tr>
                                <td style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 20px; line-height: 30px; color: #000000" valign="top">
                                  ${dateDisplay}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: HEADER -->

                  <!-- BEGIN MODULE: WORD -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="12" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 30px; background-color: #ffffff; border-radius: 10px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 12px; line-height: 20px; letter-spacing: 1px; color: #000000; background-color: #fff59d;">
                                    WORD
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td height="20" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 24px; font-weight: 700; line-height: 28px; color: #000000">
                                    ${word.word}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td height="10" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 16px; line-height: 24px; color: #000000" valign="top">
                                  <p>
                                    <strong><span style="font-size: 12px;">DEFINITION</span></strong>
                                    <br>
                                    ${
                                      word.definitions.length === 1
                                        ? word.definitions[0]
                                        : word.definitions
                                            .map((def, i) => {
                                              return `<strong>${i + 1}.</strong> ${def}`;
                                            })
                                            .join(" ")
                                    }
                                    <br><br>
                                    <strong><span style="font-size: 12px;">EXAMPLE</span></strong>
                                    <br>
                                    ${marked.parseInline(word.examples[0])}
                                    <br><br>
                                    <strong><span style="font-size: 12px;">ORIGIN</span></strong>
                                    <br>
                                    ${marked.parseInline(word.origin)}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: WORD -->

                  ${
                    idiom != null
                      ? `<!-- BEGIN MODULE: IDIOM -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="12" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 30px; background-color: #ffffff; border-radius: 10px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 12px; line-height: 20px; letter-spacing: 1px; color: #000000; background-color: #fff59d;">
                                    IDIOM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td height="20" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 24px; font-weight: 700; line-height: 28px; color: #000000">
                                    ${idiom.term}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td height="10" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 16px; line-height: 24px; color: #000000" valign="top">
                                  ${marked(idiom?.definition)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: IDIOM -->`
                      : ""
                  }

                  ${
                    funFacts != null && funFacts.length > 0
                      ? `<!-- BEGIN MODULE: FUN FACTS -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="12" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 30px; background-color: #ffffff; border-radius: 10px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 12px; line-height: 20px; letter-spacing: 1px; color: #000000; background-color: #fff59d;">
                                    FUN FACTS
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td height="10" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                              <tr>
                                <td style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 16px; line-height: 24px; color: #000000" valign="top">
                                  ${funFacts.map((fact) => `<p>${fact.fact}</p>`).join("")}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: FUN FACTS -->`
                      : ""
                  }

                  <!-- BEGIN MODULE: ARTIST -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="12" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 30px; background-color: #ffffff; border-radius: 10px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td colspan="2" valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 12px; line-height: 20px; letter-spacing: 1px; color: #000000; background-color: #fff59d;">
                                    ARTIST
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" height="25" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                              <tr>
                                <td valign="middle" width="10%" style="padding-right: 20px;">
                                  <table border="0" cellpadding="0" cellspacing="0" width="60" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td valign="top">
                                          <img
                                            src="${getImageUrl(artist.mainImg)}"
                                            width="60"
                                            height="60"
                                            alt="${artist.name}"
                                            style="display: block; max-width: 100%; height: auto; border: 0; text-decoration: none; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; border-radius: 5px;"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td width="90%" style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 24px; font-weight: 700; line-height: 28px; color: #000000" valign="middle">
                                  ${artist.name}
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" height="10" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                              <tr>
                                <td colspan="2" style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 16px; line-height: 24px; color: #000000" valign="top">
                                  ${artist.summary
                                    .slice(0, 3)
                                    .map((paragraph) => {
                                      return `<p>${paragraph}</p>`;
                                    })
                                    .join("")}
                                  <p>
                                    <a href="${artist.urlGoogle}"style="color: #3333ee;">
                                      Learn more »
                                    </a>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: ARTIST -->

                  <!-- BEGIN MODULE: PERSON -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="12" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 30px; background-color: #ffffff; border-radius: 10px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td colspan="2" valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 12px; line-height: 20px; letter-spacing: 1px; color: #000000; background-color: #fff59d;">
                                    HISTORICAL FIGURE
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" height="25" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                              <tr>
                                <td valign="middle" width="10%" style="padding-right: 20px;">
                                  <table border="0" cellpadding="0" cellspacing="0" width="60" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td valign="top">
                                          <img
                                            src="${getImageUrl(person.mainImg)}"
                                            width="60"
                                            height="60"
                                            alt="${person.name}"
                                            style="display: block; max-width: 100%; height: auto; border: 0; text-decoration: none; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; border-radius: 5px;"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td width="90%" style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 24px; font-weight: 700; line-height: 28px; color: #000000" valign="middle">
                                  ${person.name}
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" height="10" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                              <tr>
                                <td colspan="2" style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 16px; line-height: 24px; color: #000000" valign="top">
                                ${person.summary
                                  .slice(0, 3)
                                  .map((paragraph) => {
                                    return `<p>${paragraph}</p>`;
                                  })
                                  .join("")}
                                <p>
                                  <a href="${person.urlWiki}"style="color: #3333ee;">
                                    Learn more »
                                  </a>
                                </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: PERSON -->

                  <!-- BEGIN MODULE: EVENT -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="12" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 30px; background-color: #ffffff; border-radius: 10px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td colspan="2" valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 12px; line-height: 20px; letter-spacing: 1px; color: #000000; background-color: #fff59d;">
                                    HISTORIC EVENT
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" height="25" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                              <tr>
                                <td valign="middle" width="10%" style="padding-right: 20px;">
                                  <table border="0" cellpadding="0" cellspacing="0" width="60" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td valign="top">
                                          <img
                                            src="${getImageUrl(event.mainImg)}"
                                            width="60"
                                            height="60"
                                            alt="${event.name}"
                                            style="display: block; max-width: 100%; height: auto; border: 0; text-decoration: none; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; border-radius: 5px;"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td width="90%" style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 24px; font-weight: 700; line-height: 28px; color: #000000" valign="middle">
                                  ${event.name}
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" height="10" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                              <tr>
                                <td colspan="2" style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 16px; line-height: 24px; color: #000000" valign="top">
                                ${event.summary
                                  .slice(0, 3)
                                  .map((paragraph) => {
                                    return `<p>${paragraph}</p>`;
                                  })
                                  .join("")}
                                <p>
                                  <a href="${event.urlWiki}"style="color: #3333ee;">
                                    Learn more »
                                  </a>
                                </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: EVENT -->
                  
                  ${
                    quote != null
                      ? `<!-- BEGIN MODULE: QUOTE -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="12" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 30px; background-color: #ffffff; border-radius: 10px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <span style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 12px; line-height: 20px; letter-spacing: 1px; color: #000000; background-color: #fff59d;">
                                    QUOTE
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td height="10" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                              <tr>
                                <td style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 20px; line-height: 28px; color: #000000" valign="top">
                                  <p>
                                    “${quote.quote}”
                                    <br>
                                    <span style="font-size: 16px; color: #777777;">—${quote.author}</span>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: QUOTE -->`
                      : ""
                  }

                  <!-- BEGIN MODULE: FOOTER -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="12" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 30px; background-color: #ffffff; border-radius: 10px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 16px; line-height: 24px; color: #000000" valign="top">
                                  <div><strong>Smartful</strong></div>
                                  <div>${dateDisplay}</div>
                                </td>
                              </tr>
                              <tr>
                                <td height="10" style="font-size: 1px; line-height: 1px">&nbsp;</td>
                              </tr>
                              <tr>
                                <td style="font-family: courier, menlo, consolas, monaco, monospace; font-size: 12px; line-height: 20px; color: #000000" valign="top">
                                  <a href="https://getsmartful.com/" style="color: #777777;">Visit website</a>
                                  <span>&nbsp;</span>
                                  <a href="https://getsmartful.com/unsub" style="color: #777777;">Unsubscribe</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: FOOTER -->

                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Fix for Gmail on iOS -->
  <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</body>
</html>`;
}

function getImageUrl(path: string): string {
  return `https://getsmartful.com/data/${path}`;
}
