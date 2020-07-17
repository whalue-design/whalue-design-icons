// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RetweetOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RetweetOutlined';

export default {
  name: 'IconRetweetOutlined',
  displayName: 'RetweetOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RetweetOutlinedSvg } },
      children,
    ),
};