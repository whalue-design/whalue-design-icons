// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloseCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/CloseCircleFilled';

export default {
  name: 'IconCloseCircleFilled',
  displayName: 'CloseCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloseCircleFilledSvg } },
      children,
    ),
};