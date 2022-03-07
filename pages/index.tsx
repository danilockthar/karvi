import React from 'react';
import PokeCard from '../src/components/PokeCard';
import styled from 'styled-components';
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query';
import { fetchPokemons } from '../src/services/fetchPokemons';

const Index = () => {

    const {
        data,
        error,
        isLoading,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
    } = useInfiniteQuery('pokemons', fetchPokemons, {
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? false,
    })
    return (
        <Wrapper>
            <h1 className='title'> Cátalogo</h1>
            <WrapperPokemons>
                {data?.pages?.map((group, i) =>
                    group.pokemons.map(pokemon => (
                        <PokeCard info={pokemon} />
                    ))
                )}
            </WrapperPokemons>
            <button className='load-more' onClick={() => fetchNextPage()}> LOAD MORE</button>
        </Wrapper>
    )
}

export default Index

export async function getStaticProps() {

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery("pokemons",
        fetchPokemons
    );
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
        },
    }
}

const WrapperPokemons = styled.div`
display:grid;
grid-template-columns: 1fr;
grid-row-gap:3rem;
justify-content:center;
@media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap:1rem;
}
`

const Wrapper = styled.div`
padding:1rem;
display:grid;
& .title {
    margin:1rem 0 2rem 0;
    text-align:center;
    color:#f3f3f3;
}
& .load-more{
    color:#f3f3f3;
    margin: 2em 0;
    background:#353d64;
    padding:10px 20px;
    border:none;
    justify-self:center;
    font-size:1rem;
    font-weight:600;
    cursor:pointer;
}
@media (min-width: 768px) {
    padding:2rem;
}
`