// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RedditSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/RedditSquareFilled';

export default {
  name: 'IconRedditSquareFilled',
  displayName: 'RedditSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RedditSquareFilledSvg } },
      children,
    ),
};