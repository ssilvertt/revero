import ButtonarrowSVG from '@svg/buttonarrowsvg.svg?react';
import { AnimatedButton } from './AnimatedButton.tsx';

interface NewsCardBaseProps {
    type: 'text' | 'image';
}

interface TextNewsCardProps extends NewsCardBaseProps {
    type: 'text';
    date: string;
    title: string;
    content: string;
    buttonText?: string;
}

interface ImageNewsCardProps extends NewsCardBaseProps {
    type: 'image';
    imageUrl: string;
    imageAlt?: string;
}

type NewsCardProps = TextNewsCardProps | ImageNewsCardProps;

export function NewsCard(props: NewsCardProps) {
    if (props.type === 'image') {
        return (
            <div className="bg-[#131D39] rounded-[25px] p-2">
                <img
                    src={props.imageUrl}
                    alt={props.imageAlt || 'News image'}
                    className="w-full h-auto rounded-[15px]"
                />
            </div>
        );
    }

    return (
        <div className="bg-[#131D39] rounded-[25px] p-2">
            <p className="text-[15px] leading-[18px] opacity-50 ml-2 mt-2">{props.date}</p>
            <p className="font-proxima text-[15px] font-bold leading-[18px] ml-2 mt-1">{props.title}</p>
            <p className="text-[15px] leading-[18px] opacity-50 ml-2 mt-1">{props.content}</p>
            <AnimatedButton className="flex gap-x-1 items-center bg-gradient-to-b from-[#4206FF] to-[#3891FF] border-t rounded-[3px] px-2 py-[3px] border-[#3D4AFF] ml-2 mt-2 mb-3">
                <ButtonarrowSVG />
                <p className="text-[15px] leading-[18px] font-proxima">{props.buttonText || 'Читать статью'}</p>
            </AnimatedButton>
        </div>
    );
}
