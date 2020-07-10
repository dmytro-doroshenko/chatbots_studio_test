const db = require('../').getInstance();
const {CLASS_MODEL} = require('../../config');

module.exports = {
    createClass: (classToCreate) => {
        const ClassModel = db.getModel(CLASS_MODEL);

        return ClassModel.create(classToCreate);
    },

    deleteClass: (id) => {
        const ClassModel = db.getModel(CLASS_MODEL);

        return ClassModel.destroy({
            where: {id}
        });
    },

    getAllClasses: () => {
        const ClassModel = db.getModel(CLASS_MODEL);

        return ClassModel.findAll({});
    },

    getClassById: (id) => {
        const ClassModel = db.getModel(CLASS_MODEL);

        return ClassModel.findAll({
            where: {id}
        });
    },

    updateClassById: async (id, newParams) => {
        const ClassModel = db.getModel(CLASS_MODEL);

        const [status] = await ClassModel.update(
            newParams,
            {where: {id}}
        );

        return status;
    },
};
