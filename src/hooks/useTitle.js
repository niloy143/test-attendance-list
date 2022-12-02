const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Nexis Test`;
    }, [title])
}

export default useTitle;