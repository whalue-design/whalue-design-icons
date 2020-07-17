// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RedditCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/RedditCircleFilled';

export default {
  name: 'IconRedditCircleFilled',
  displayName: 'RedditCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RedditCircleFilledSvg } },
      children,
    ),
};