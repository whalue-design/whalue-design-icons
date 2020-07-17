// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FolderAddTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FolderAddTwoTone';

export default {
  name: 'IconFolderAddTwoTone',
  displayName: 'FolderAddTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderAddTwoToneSvg } },
      children,
    ),
};