import { View, Text } from 'react-native';

// 定義出此元件的Props需要哪些資料
interface Props {
	/* 必須要給的Props */
	size: number;
	color: string;
	
	/* 可給可不給的Props */
	text?: string;
}

const Square: React.FC<Props> = ({size, color, text="default text"}) => {
	// 元件的大小和color以及顯示出的文字會根據parent傳進來的值變動
  return (
    <View style={{
			width: size, 
			height: size, 
			backgroundColor: color,
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<Text>{text}</Text>
		</View>
  );
}

export default Square;