import { repeat } from "core-js/core/string";
import { GraphQLID } from "graphql";
import styled from "styled-components"

export const ContainerWrapper = styled.div `
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, auto)) 1fr;
    grid-template-rows: 8rem 20rem 20rem 20rem 20rem;
    gap: 0 2rem;
`