

# Introduction #
Take notes: this documentation is a work in progress, WPI fancy class is available inside [/public/css/icecream.css](http://code.google.com/p/wp-istalker/source/browse/branches/WordPress/2.7/1.6.2/public/css/icecream.css?spec=svn149&r=149). Digg it

## General Class Selector ##
| **Class Selector** | **Description** | **Styles** | **Notes** |
|:-------------------|:----------------|:-----------|:----------|
| r                  | reset elements margin and padding | ` margin,padding ` |           |
| r--                | Same as above, will append `!important` rules | ` margin,padding `|           |
| dn                 | hide elements   | ` display `|           |
| dn--               | Same as above, will append `!important` rules | ` display `|           |
| di                 | set elements box model to inline (`display:inline`) | ` display `|           |
| di--               | Same as above, will append `!important` rules |` display ` |           |
| rtxt               | Text to image replacement<sup>1</sup> | ` display, text-indent, position `|           |
| fw                 | bold text 700. Make text bold | ` font-weight `| useful if you want to stuff the `strong` tag without being so obvious ;p (grayhat SEO related) |
| fw-                | bold text 400. reduce bold (normal) | ` font-weight ` |           |
| fl                 | Float elements to left (`float:left`) | ` float `  |           |
| fr                 | Float elements to right (`float:right`)| ` float `  |           |
| fn                 | Disabled float (`float:none`)| ` float `  |           |
| cf                 | Cross browser clear float | ` clear, *:after ` |           |
| cb                 | Clear float on both direction | ` clear`   |           |
| cl                 | Clear left float | ` clear`   |           |
| cr                 | Clear right float | ` clear `  |           |
| thumb              |                 |            |           |
| thumb-             |                 |            |           |
| vn                 |                 |`visibility` |           |
| vh                 |                 |`visibility` |           |
| ox                 |                 |`overflow`  |           |

## Typography Class Selector ##

| **Class Selector** | **Description**  |
|:-------------------|:-----------------|
| drop-cap           | Single text _magazine_ style drop cap |

## Client-side-script Class Selector ##
| **Class Selector** | **Description**  |
|:-------------------|:-----------------|
| toggle-content     |                  |
| expand             |                  |
| ttip               |                  |
| scroll-to          |                  |
| select-even        |                  |
| select-odd         |                  |
| on-click-select    |  input elements only |

#### Client Time Body Class Selector ####
This features is available inside the `Theme options › Advanced Preferences › Client Side features › Client Time`.
| **Class Selector** | **Description**  |
|:-------------------|:-----------------|
| dy                 | **Day** from `09:00 > 16:59` |
| dk                 | **Dusk** from `17:00 > 19:59` |
| nt                 | **Night** from `20:00 > 04:59` |
| dw                 | **Dawn** from `05:00 > 08:59` |

## Reference ##

  1. http://www.stopdesign.com/articles/replace_text/