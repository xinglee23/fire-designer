import type { FC } from "react";
import { memo } from "react";
import { Flex, Card, Text, Box, Avatar } from "@radix-ui/themes";

export interface WidgetProps {
  title: string;
  yellow?: boolean;
  preview?: boolean;
}

const CurrentBox = (
  <Card style={{ maxWidth: 240 }}>
    <Flex gap='3' align='center'>
      <Avatar
        size='3'
        src='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop'
        radius='full'
        fallback='T'
      />
      <Box>
        <Text as='div' size='2' weight='bold'>
          Teodros Girmay
        </Text>
        <Text as='div' size='2' color='gray'>
          Engineering
        </Text>
      </Box>
    </Flex>
  </Card>
);

export const Widget: FC<WidgetProps> = memo(function Widget({
  title,
  yellow,
  preview,
}) {
  return (
    <div
      className={
        yellow
          ? "px-[1rem] py-[0.5rem] divide-solid border-current border-[1px] cursor-move bg-yellow-500"
          : "px-[1rem] py-[0.5rem] divide-solid border-current border-[1px] cursor-move bg-white-500"
      }
      role={preview ? "BoxPreview" : "Box"}
    >
      {title}
      {CurrentBox}
    </div>
  );
});
