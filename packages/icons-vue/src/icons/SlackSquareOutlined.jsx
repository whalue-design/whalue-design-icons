// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SlackSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SlackSquareOutlined';

export default {
  name: 'IconSlackSquareOutlined',
  displayName: 'SlackSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SlackSquareOutlinedSvg } },
      children,
    ),
};