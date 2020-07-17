// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AppleFilledSvg from '@whalue-design/icons-svg/lib/asn/AppleFilled';

export default {
  name: 'IconAppleFilled',
  displayName: 'AppleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AppleFilledSvg } },
      children,
    ),
};