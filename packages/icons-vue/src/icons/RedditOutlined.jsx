// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RedditOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RedditOutlined';

export default {
  name: 'IconRedditOutlined',
  displayName: 'RedditOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RedditOutlinedSvg } },
      children,
    ),
};