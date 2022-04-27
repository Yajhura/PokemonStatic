import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { AiOutlineCaretRight } from 'react-icons/ai';
import { Pokemon } from '../../types/Pokemon';

interface Props {
    pokemon: Pokemon;
}

export const ButtonRigth = ({ pokemon }: Props) => {
    const router = useRouter();
    const next = () => {
        if (pokemon.id < 151) {
            return router.push(`/pokemon/${pokemon.id + 1}`);
        }
    };
    return (
       <>
        <Button
            auto
            onClick={next}
            color="gradient"
            ghost
            css={{
                position: "fixed",
                top: "50%",
                right: "10px",
                zIndex: 21,
            }}
        >
            <AiOutlineCaretRight />
        </Button>
       </>
    );
};