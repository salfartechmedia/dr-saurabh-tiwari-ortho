import { defineType, defineField } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Image Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Surgery", value: "Surgery" },
          { title: "Hospital", value: "Hospital" },
          { title: "Doctor", value: "Doctor" },
          { title: "Patient", value: "Patient" },
          { title: "Event", value: "Event" },
          { title: "Awards", value: "Awards" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Gallery Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "alt",
      title: "Alt Text",
      description: "SEO friendly image description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});