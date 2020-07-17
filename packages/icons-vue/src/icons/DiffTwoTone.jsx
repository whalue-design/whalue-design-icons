// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DiffTwoToneSvg from '@whalue-design/icons-svg/lib/asn/DiffTwoTone';

export default {
  name: 'IconDiffTwoTone',
  displayName: 'DiffTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DiffTwoToneSvg } },
      children,
    ),
};