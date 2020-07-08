module.exports = {
    // ----- 404: NOT FOUND -----
    CLASS_NOT_FOUND_TO_DELETE: {
        message: (id) => `Class #${id} not found. Nothing has been deleted`,
        code: 4041
    },
    CLASS_NOT_FOUND_TO_UPDATE: {
        message: (id) => `Class #${id} not found. Nothing has been updated`,
        code: 4042
    },
    CLASS_NOT_FOUND: {
        message: (id) => `Class #${id} not found`,
        code: 4043
    }
}
