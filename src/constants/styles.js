import { StyleSheet } from 'react-native';

const typography = {
  // Define font families
  fontFamily: {
    regular: 'Rubik-Regular',
    medium: 'Rubik-Medium',
    semiBold: 'Rubik-SemiBold',
    bold: 'Rubik-Bold',
  },

  bold: {
    regular: 'Rubik-Regular',
    medium: 'Rubik-Medium',
    semiBold: 'Rubik-SemiBold',
    bold: 'Rubik-Bold',
  },

  // Heading Styles
  h1: {
    fontSize: 96,
    fontFamily: 'Rubik-Bold', // Use Bold weight
    lineHeight: 120,
  },

  h2: {
    fontSize: 52,
    fontFamily: 'Rubik-SemiBold', // Use SemiBold weight
    lineHeight: 72,
  },

  h3: {
    fontSize: 32,
    fontFamily: 'Rubik-SemiBold', // Use SemiBold weight
    lineHeight: 40,
  },

  // Body Text
  body: {
    fontSize: 18,
    fontFamily: 'Rubik-Regular', // Use Regular weight
    lineHeight: 28,
  },

  // Body Text Small
  bodySmall: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular', // Use Regular weight
    lineHeight: 24,
  },

  // Caption or Small Text
  caption: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular', // Use Regular weight
    lineHeight: 16,
  },

  smallText: {
    fontSize: 10,
    fontFamily: 'Rubik-Light', // Use Light weight
    lineHeight: 14,
  },

  // Custom styles can be added here (e.g., buttons, titles)
  title: {
    fontSize: 18,
    fontFamily: 'Rubik-SemiBold', // SemiBold for Titles
    lineHeight: 22,
  },
};

const styles = StyleSheet.create({
  // Applying typography styles in the component
  header: typography.h1,
  subHeader: typography.h2,
  bodyText: typography.body,
  bodySmallText: typography.bodySmall,
  captionText: typography.caption,
  smallText: typography.smallText,
  titleText: typography.title,
});

export { typography, styles };
