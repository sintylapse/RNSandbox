const parseScreenTitle = screenId => {
    const currentScreenId = screenId.slice(screenId.lastIndexOf('.') + 1, screenId.length)
    const stringSlices = [], upperIndexes = []

    for (let i = 0; i < currentScreenId.length; i++) {
        if (currentScreenId[i] === currentScreenId[i].toUpperCase()) {
            upperIndexes.push(i)
        }
    }

    for (let i = 0; i < upperIndexes.length; i++) {
        stringSlices.push(currentScreenId.slice(upperIndexes[i], upperIndexes[i + 1] || currentScreenId.length))
    }

    const screenTitle = stringSlices.join(' ')

    return screenTitle
}

const getCustomScreenTitle = screenId => {
    switch (screenId) {
        case 'Main': return 'React Native Sandbox'
        default: return null
    }
}

export const navigateTo = (navigator, screenId, options = {}) => {
    const customScreenTitle = getCustomScreenTitle(screenId)

    navigator.push({
        screen: screenId,
        title: customScreenTitle !== null ? customScreenTitle : parseScreenTitle(screenId),
        animationType: 'fade',
        ...options,
    })
}
