// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CopyrightCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/CopyrightCircleFilled';

export default {
  name: 'IconCopyrightCircleFilled',
  displayName: 'CopyrightCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CopyrightCircleFilledSvg } },
      children,
    ),
};