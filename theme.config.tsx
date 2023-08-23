import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
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
            MIT {new Date().getFullYear()} ©{' 2023 '}
                <a href="https://www.caiths.com" target="_blank">
            温瞳
    </a>
    .
    </span>
        )
    }
}

