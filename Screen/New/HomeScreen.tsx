import { scrollTo } from 'react-native-reanimated';

export default function App() {
  const animatedRef = useAnimatedRef();
  const scrollY = useSharedValue(0);

  useDerivedValue(() => {
    scrollTo(animatedRef, 0, scrollY.value, true);
  });

  return (
    
    <Animated.ScrollView ref={animatedRef}>{







    }}
    </Animated.ScrollView>
  );
}