import { createGlobalStyle } from "styled-components"

export const IconGlobalStyled = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1571293382080'); /* IE9 */
  src: url('./iconfont.eot?t=1571293382080#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAW8AAsAAAAAC1gAAAVwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqJPIgKATYCJAMYCw4ABCAFhG0HZxvPCVGUT06N7MeAu3GuIO2y8+qbkyRBEssqZmZUvkQhgmqtypru6QNGdXESHxShA1YECi2h02/0eyAj9n/n8h+yHWSojuWQFUIu/emllJbfPT+np8zYkzAbnl3+u7v53QxUE1Cba5D7Nv7+UDnZGPyY9bItYrkgzDU7qVcqr2G1Ao01aIEssFYLVCDtMHZhAjcTaDWpKXZw5+gUsjJlr0DcFCqFbMgu57SGZqGknJjFB8CpuXrJfAHe2z8f/2EjslTqRDnwxI1tBdZ+zTy/Yr34j0O06QREe15Qp5GwDmTiSar/sYSrXbf1rWl/IekQ0K5ZJf+aecafyefzz6/+/yekVsKhXY0S6vznqSWiQPp2SDiiq1dQoQsIfnEBFb+kgMzveakY8PsK2iVoLi0OPQPiIUD8goT1CyVZs13pEeFStnkA5lraW7WFa+kIZcM50VSxV6jBXkai165BRGDXryMKuXoV4WFXrmhijQ67K/XI3qvUdUQmrr2DClICHSRoShwZwJfz+FB2GF8cjIgcVOAblgpP2A0pIM/gW+OxZR+DwDCCj7RCtiyDFyuQ2s9gVM3vwfc6iNiXsIVykDq8QTa5PD6xsnU7zWAvVLDlAn7RfPtl4lI5uYyvUDSxmhO1yU2QKcXJS9nkb08gzxzAD56Fx6+rzl6rgor45aBbHbqOHDa9dkXM1mPEk7D1hzUfvAiHUf1XsaXLhteu5JASmYOjktgQ5J/wZYfF0vszU9JQdo7A4CpBQ0FqBV+OX1wQytjSggUbMnMjYmH9SMxGbyWs21eIfDQ5KBGbfdGIqLHtK1LR/f1vgvw8ZL3k8/LkvOTcRzSJZcnLC67hITfsIZeykazvRRcQGf2PT+HF6F9k3NwZG2Nc3mxcFhvL7yTWoMBunZpqlRSWtL4CWDaIcNzOYbc94u0sZjsRK2nvxPR3ipGc5Bi2SE1da6zNPJ+P/1LzjYYh0NnaZCrEX3RYXGy7pPKYsgxQuIw/aLVXuThzhf67fbjaf01Y9PLjpFULB3tRWZUFrgQ1f7UE49ktlNQl7unc1b2rc2/104ZRCEc2bBiRlR0tshFJU01VLVUtE9FUyZd2kc5XcXJ35+DQ8yDxOU5BESWvoIzMwQYoZL6b1MrW40i4tOj3UKFR6Fy2JzhCyLHQlZnMJ6SK2weyU3Y6tErfrgrXtNukw5Gl3Kjx6/vzMOExNgiWYHsupyfYpR52CB8R7rCkfmUO53i4mvcldfOyQ/OOD+8cANKA/w6/ee3XhLryH0aWZqJRKI3QUamZqT75D7vOJ22aqydch9AonaesV0sdUM8F/8gUcMoeabTTDa3DESPeZqVgQeaPdPCE8qj0lXUHQHrF/AKNusSPBA5AYzrxl4jni78TXayZ32Mn55/9tOIqW1+z8JNZ9P1N+5gda9Ql1ZO/4walFT+DouSELKoUR8n8+PqOAsVlq+CtsmpVp/ALhHv9tGUcKN1MaDbgQ6XJBCTN5jGZsA61Npv68oYpILRas3t6mz6uhMgtWPUEIHR7hkqnb5B0e8VkwjfUBv1D0R0JaHUu+i7YZjFE/oCL1EeFDEZEMGlxzeXnndZjVAODukGVTT1H1xMp0mt3o6VdtNBt4xAvVPu+zwl3pUl2wO3QMCSxXakh89tD37cXOh2e9kZtJk3IO8CFKB9SEAMjhMBIFm5O78vHvv8YUgUMlJszriB8Drk8Yv1ET1u3BGZXb5UadyzdnpCqz0dZjuBUs2QidpAXGWpeIuz07TSI8bUNa2RtCzpoMl5W3+7faB7lVdBKuWiJKlLkqKNEk9Yb1FIVqgnzheL7aPKBLazUvUAYxlhrEHjCQs9TBDWlpXBhUYuhF8MRAA==') format('woff2'),
  url('./iconfont.woff?t=1571293382080') format('woff'),
  url('./iconfont.ttf?t=1571293382080') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1571293382080#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before {
  content: "\e623";
}

.icon-Aa:before {
  content: "\e666";
}

.icon-spin:before {
  content: "\e759";
}

.icon-quill:before {
  content: "\e66f";
}

.icon--businessdiamondfinancemoney:before {
  content: "\e726";
}
`
