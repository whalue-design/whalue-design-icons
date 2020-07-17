// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CiCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/CiCircleFilled';

export default {
  name: 'IconCiCircleFilled',
  displayName: 'CiCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CiCircleFilledSvg } },
      children,
    ),
};