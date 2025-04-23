import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
    slug: "categories",
    fields: [{
        type: "text",
        name: "name",
        required: true,
        unique: true,
    }]
}