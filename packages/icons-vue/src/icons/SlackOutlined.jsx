// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SlackOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SlackOutlined';

export default {
  name: 'IconSlackOutlined',
  displayName: 'SlackOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SlackOutlinedSvg } },
      children,
    ),
};