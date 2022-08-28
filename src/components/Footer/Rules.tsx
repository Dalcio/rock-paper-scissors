/* eslint-disable @next/next/no-img-element */

import { FooterButton } from './shared.components';
import useSharedFooterStyles from './shared.styles';

const Rules = () => {
  const { classes } = useSharedFooterStyles();

  return (
    <FooterButton title="Rules" btnVariant="outline">
      <img className={classes.rules} src="/images/image-rules-bonus.svg" alt="Rules" />
    </FooterButton>
  );
};

export default Rules;
