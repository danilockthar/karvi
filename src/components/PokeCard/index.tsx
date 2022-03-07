import * as React from 'react'
import styled from 'styled-components'

interface Props {
    info: {
        name: string;
        id: number;
        picture: string;
        types: Array<string>
    }
}

const PokeCard: React.FC<Props> = ({ info }) => {
    const { name, picture, types } = info;
    return (
        <Wrapper>
            <Card id='pokemon-card'>
                <p id='poketypes'> [ {types.map((type, i, row) => i + 1 === row.length ? `${type.toUpperCase()} ` : `${type.toUpperCase()}, `)}]</p>
                <Picture src={picture} id='pokepicture' />
            </Card>
            <h2 id='pokename'> {name.toUpperCase()} </h2>
        </Wrapper>
    )
}

export default PokeCard

const Wrapper = styled.div`
display:grid;
cursor:pointer;
&:hover > #pokemon-card{
    background:#efefef;
    & #poketypes {
        color:#2b3151;
    }
}
& #pokename {
    margin:.8rem 0 0 0;
    color:#ecb621;
}
`
const Card = styled.div`
    width:100%;
    transition:0.3s;
    max-width:100%;
    display:grid;
    background:#353d64;
    padding:1rem;
    box-sizing:border-box;
    border-radius:5px;
    & #poketypes {
        color:#ecb621;
        font-size:.8rem;
        font-weight:700;
    }
`
const Picture = styled.img`
width:inherit
`