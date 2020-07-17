// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PushpinFilledSvg from '@whalue-design/icons-svg/lib/asn/PushpinFilled';

export default {
  name: 'IconPushpinFilled',
  displayName: 'PushpinFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PushpinFilledSvg } },
      children,
    ),
};