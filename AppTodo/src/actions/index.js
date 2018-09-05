import { CHOOSE_CATEGORY } from './type'

//chooseCategory('Birthday')
export const chooseCategory = (category) => ({
    type: CHOOSE_CATEGORY,
    payload: category
}) 