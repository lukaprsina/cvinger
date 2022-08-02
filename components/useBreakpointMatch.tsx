import { Breakpoint, Theme, useTheme } from '@mui/material'
import { useState, useLayoutEffect } from 'react'

export type BreakpointVisiblityValues =
    | 'xsOnly'
    | 'smOnly'
    | 'mdOnly'
    | 'lgOnly'
    | 'xlOnly'
    | 'xsUp'
    | 'smUp'
    | 'mdUp'
    | 'lgUp'
    | 'xlUp'
    | 'xsDown'
    | 'smDown'
    | 'mdDown'
    | 'lgDown'
    | 'xlDown'

export type BreakpointValueProp = BreakpointVisiblityValues | BreakpointVisiblityValues[] | 'always'

const removeCSSMQOperator = (mqString = '') => mqString.replace('@media ', '')
const getMQForVisiblityValues = (theme: Theme, visValues: BreakpointVisiblityValues[]) => {
    const { up, down, only } = theme.breakpoints
    const mqArray = visValues.map(visValue => {
        // get the correct media query creating function
        const getMqFn = visValue.endsWith('Up') ? up : visValue.endsWith('Down') ? down : only
        // parse the correct breakpoint
        const breakpoint = visValue.replace(/((Up)|(Down)|(Only))$/, '') as Breakpoint
        return removeCSSMQOperator(getMqFn(breakpoint))
    })
    return mqArray.join()
}

export default function useBreakpointMatch(breakpointValue: BreakpointValueProp = 'always') {
    const theme = useTheme<Theme>()
    const [matches, setMatches] = useState(breakpointValue === 'always')
    const visibleArray =
        breakpointValue && breakpointValue !== 'always'
            ? Array.isArray(breakpointValue)
                ? breakpointValue
                : [breakpointValue]
            : []

    useLayoutEffect(() => {
        // exit early for default value
        if (breakpointValue === 'always') {
            setMatches(true)
            // no clean up needed
            return
        }

        const mediaQuery = getMQForVisiblityValues(theme, visibleArray)
        const mediaQueryList = window.matchMedia(mediaQuery)

        function matchChangeHandler(e: MediaQueryListEvent) {
            setMatches(e.matches)
        }

        // listen for media query changes
        mediaQueryList.addEventListener('change', matchChangeHandler)
        setMatches(mediaQueryList.matches)

        // cleanup and remove listeners
        return () => mediaQueryList.removeEventListener('change', matchChangeHandler)
    }, visibleArray)

    return { matches }
}