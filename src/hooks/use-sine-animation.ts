import { easings, useSpring } from '@react-spring/native'

export const useSineAnimation = () => {
  return useSpring({
    to: { y: 8 },
    from: { y: -8 },
    loop: {
      reverse: true,
    },
    reset: true,
    config: {
      duration: 500,
      easine: easings.easeInOutSine,
    },
  })
}
