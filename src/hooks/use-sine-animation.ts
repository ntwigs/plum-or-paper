import { easings, useSpring } from '@react-spring/native'
import { theme } from '../theme'

export const useSineAnimation = () => {
  return useSpring({
    to: { y: theme.getSize(1) },
    from: { y: -theme.getSize(1) },
    loop: {
      reverse: true,
    },
    reset: true,
    config: {
      duration: 500,
      easine: easings.easeInOutBounce,
    },
  })
}
