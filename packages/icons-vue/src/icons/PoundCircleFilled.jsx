// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PoundCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/PoundCircleFilled';

export default {
  name: 'IconPoundCircleFilled',
  displayName: 'PoundCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PoundCircleFilledSvg } },
      children,
    ),
};