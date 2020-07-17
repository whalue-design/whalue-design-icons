// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DownCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/DownCircleFilled';

export default {
  name: 'IconDownCircleFilled',
  displayName: 'DownCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DownCircleFilledSvg } },
      children,
    ),
};