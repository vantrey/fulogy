export type SelectorType = {
    id: string
    cover: string
}

export type imgGroupType = {
    selectorId: string
    images:
        Array<{
            imgId: string
            img: string
        }>
}

const selectorData: Array<SelectorType> = [
    {
        id: 'light',
        cover: '',
    },
    {
        id: 'dark',
        cover: '',
    },
    {
        id: 'cold',
        cover: '',
    },
]

const imgGroupData: Array<imgGroupType> = [
    {
        selectorId: 'light',
        images: [
            {imgId: '1', img: 'light img1',},
            {imgId: '2', img: 'light img2',},
            {imgId: '3', img: 'light img3',},
        ]
    },
    {
        selectorId: 'dark',
        images: [
            {imgId: '1', img: 'dark img1',},
            {imgId: '2', img: 'dark img2',},
            {imgId: '3', img: 'dark img3',},
        ]
    },
    {
        selectorId: 'cold',
        images: [
            {imgId: '1', img: 'cold img1',},
            {imgId: '2', img: 'cold img2',},
            {imgId: '3', img: 'cold img3',},
        ]
    },
]

export const initialState = {

    selectorData:   [
        {
            id: 'light',
            cover: '',
        },
        {
            id: 'dark',
            cover: '',
        },
        {
            id: 'cold',
            cover: '',
        },
    ] as Array<SelectorType>,

    imgGroupData: [
        {
            selectorId: 'light',
            images: [
                {imgId: '1', img: 'light img1',},
                {imgId: '2', img: 'light img2',},
                {imgId: '3', img: 'light img3',},
            ]
        },
        {
            selectorId: 'dark',
            images: [
                {imgId: '1', img: 'dark img1',},
                {imgId: '2', img: 'dark img2',},
                {imgId: '3', img: 'dark img3',},
            ]
        },
        {
            selectorId: 'cold',
            images: [
                {imgId: '1', img: 'cold img1',},
                {imgId: '2', img: 'cold img2',},
                {imgId: '3', img: 'cold img3',},
            ]
        },
    ] as Array<imgGroupType>,

    currentSelector: {
        id: 'light',
        cover: '',
    } as SelectorType | undefined,

    currentImgGroup: {
        selectorId: 'light',
        images: [
            {imgId: '1', img: 'light img1',},
            {imgId: '2', img: 'light img2',},
            {imgId: '3', img: 'light img3',},
        ]
    } as imgGroupType | undefined,

    currentImage: 'light img1'
}

type StateType = typeof initialState


const constructorReducer = (state: StateType, action: ActionsType): StateType => {
    switch (action.type) {

        case "SET_SELECTOR":
            return {
                ...state,
                currentSelector: state.selectorData.find(s => s.id === action.id),
                currentImgGroup: state.imgGroupData.find(i => i.selectorId === action.id)
            }

        case "SET_IMG_GROUP":
            return {
                ...state,
                currentImage: action.imgId
            }

        default:
            throw new Error("Action is not supported")
    }
}

type ActionsType =
    | ReturnType<typeof setCurrentSelector>
    | ReturnType<typeof setCurrentImg>

//action creators
export const setCurrentSelector = (id: string) => ({
    type: 'SET_SELECTOR',
    id
} as const);

export const setCurrentImg = (imgId: string) => ({
        type: 'SET_IMG_GROUP',
        imgId
    } as const
);

export default constructorReducer

