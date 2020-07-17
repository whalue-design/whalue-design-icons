// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TwitterCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/TwitterCircleFilled';

export default {
  name: 'IconTwitterCircleFilled',
  displayName: 'TwitterCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TwitterCircleFilledSvg } },
      children,
    ),
};