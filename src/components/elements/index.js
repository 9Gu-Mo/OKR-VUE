import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    // 전역으로 선언 할 컴포넌트 폴더
    './',

    // 하위 폴더 포함 여부
    false,

    // 기본 컴포넌트를 찾는 정규 표현식
    /Base[A-Z]\w+\.(vue|js)$/
)

const DComp = {
    install(Vue) {
        requireComponent.keys().forEach(fileName => {
            // 검포넌트 설정 가져오기
            const componentConfig = requireComponent(fileName)

            // 컴포넌트의 파스칼 표기법 이름 가져오기
            const componentName = upperFirst(
                camelCase(
                    fileName
                        .split('/')
                        .pop()
                        .replace(/\.\w+$/, '')
                )
            )

            // 전역 컴포넌트 등록
            Vue.component(
                componentConfig.default.name || componentName,
                // `export default`를 이용한 컴포넌트는 `.default`로 컴포넌트
                // 옵션을 추출하고 그렇지 않은 컴포넌트는 모듈의 루트를 호출
                componentConfig.default || componentConfig
            )
        })
    }
}

export default DComp