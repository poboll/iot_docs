import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <><img src="https://blog.itjoker.cn/favicon.ico" alt="Logo" />
      <span>
        Iot_docs
      </span>
    </>
  ),
  // project: {
  //   link: 'https://github.com/poboll/wps_script',
  // },
  docsRepositoryBase: 'https://github.com/poboll/iot_docs',
  // footer: {
  //   text: '© 2023 [温瞳](https://www.caiths.com)',
  // },
}

export default {
    // useNextSeoProps() {
    //     const { asPath } = useRouter()
    //     if (asPath !== '/') {
    //         return {
    //             titleTemplate: '%s – Iot_docs'
    //         }
    //     }
    // },
    footer: {
        text: (
            <span>
            MIT {new Date().getFullYear()} ©{' '}
                <a href="https://www.caiths.com" target="_blank">
            温瞳
    </a>
    .
    </span>
        )
    }
}

