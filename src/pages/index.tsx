import Head from 'next/head';
import {
  Box,
  Container,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { choose } from '../utils/random';
import { templates } from '../config/templates.config';
import { useEffect, useState } from 'react';
import { range } from 'lodash';

export default function Home() {
  const [tankaList, setTankaList] = useState<string[]>([]);
  const [amount, setAmount] = useState(1);
  const tankaGenerator = (templates: string[][][]) => {
    return choose(templates)
      .map((words) => choose(words))
      .join('');
  };
  useEffect(() => {
    if (!tankaList.length) {
      setTankaList(range(0, amount).map(() => tankaGenerator(templates)));
    }
  }, [tankaList, amount]);
  return (
    <Box bgColor='#18191A' minH='100vh'>
      <Container width='80vw'>
        <Head>
          <title>短歌ジェネレーター</title>
          <meta name='description' content='短歌ジェネレーター' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Slider
          width='100%'
          value={amount}
          focusThumbOnChange={false}
          mt={15}
          min={1}
          max={10}
          onChange={(value) => {
            setAmount(value);
          }}
          onChangeEnd={() => setTankaList([])}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize='sm' boxSize={8}>
            {amount}
          </SliderThumb>
        </Slider>

        <Stack direction='row' justifyContent='space-around' columnGap={6}>
          {tankaList.map((tanka) => (
            <Text
              p={2}
              key={tanka}
              color='#CCC'
              borderRadius='10px'
              border='1px solid rgb(35, 35, 35, 0.35)'
              mt={2}
              fontSize='2xl'
              backdropBlur='7px'
              backgroundColor='rgb(35, 35, 35, 0.4)'
              sx={{ writingMode: 'vertical-rl' }}
            >
              {tanka}
            </Text>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

